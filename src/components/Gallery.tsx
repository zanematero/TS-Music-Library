import GalleryItem from './GalleryItem'

// return here
function Gallery(props: any){

    //return here
    const display = props.data.map((item: any, index: any) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
