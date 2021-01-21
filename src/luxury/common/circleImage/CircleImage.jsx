import './CircleImage.css'

const CircleImage = (props) => {
  return (
    <div className='roundedContainer'>
      <img 
        src={props.imagePath} 
        alt={props.altText} 
        width={props.width} 
        height={props.height}
      />
    </div>
  )
}

export default CircleImage;