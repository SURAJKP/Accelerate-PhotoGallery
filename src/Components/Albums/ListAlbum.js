import React from 'react'
import { connect } from 'react-redux'
import { albumsList } from '../../Redux/Actions/albumsList'
import Album from './Album'
import Loader from '../Common/Loader'

class ListAlbum extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: true        
        }
    }
    
    componentDidMount() {
        this.props.albumsList().then(() => {
            this.setState({loader: false})
        }).catch((err) => {
            console.log(err)
            this.setState({loader: false})
        });
    }

    render() {
        return (
            this.state.loader ? <Loader /> : this.props.albums.map(album =>
                <div key={"Album_" + album.id}>
                    <Album album={album}/>
                </div>
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, {albumsList})(ListAlbum)