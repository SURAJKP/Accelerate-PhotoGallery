import React from 'react'
import { connect } from 'react-redux'
import classes from '../../css/Common.module.css'
import { photosList } from '../../Redux/Actions/photosList'
import { albumsList } from '../../Redux/Actions/albumsList'
import Loader from '../Common/Loader'

class ListPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: true
        }
    }

    componentDidMount() {
        this.props.photosList().then(() => {
            this.setState({loader: false})
        }).catch((err) => {
            console.log(err)
            this.setState({loader: false})
        });
        
        this.props.albumsList().then(() => {
            this.setState({loader: false})
        }).catch((err) => {
            console.log(err)
            this.setState({loader: false})
        });
    }

    render() {
        return (
            <div className={classes.mainAppWrapper}>
                <div className={classes.photoBox}>
                    {this.state.loader ? <Loader /> : (this.props.photos !== undefined && this.props.photos.length > 0) && this.props.photos.map(photo =>
                        <div className={classes.photoHolder} key={Math.random()}>
                            {/* thumbnail image wrapped in a link */}
                            <a href={"#image_" + photo.id}>
                                <img src={photo.thumbnailUrl} className={classes.thumbnail} alt="thumbnail" />
                            </a>

                            {/* lightbox container hidden with CSS */}
                            <a href="#_" className={classes.lightbox} id={"image_" + photo.id}>
                                <img src={photo.url} alt="lightbox"/>
                                <div className={classes.photoDesc}>
                                    <p>{photo.title}</p>
                                </div>
                            </a>

                            <a href={"#image_" + photo.id}>
                            <div className={classes.photoDesc}>
                                <p>{photo.title.length > 30 ? photo.title.substr(0, 30) + "..." : photo.title}</p>
                            </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos,
        albums: state.albums
    }
}


export default connect(mapStateToProps, {photosList,albumsList})(ListPhoto)