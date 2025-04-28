import PropTypes from "prop-types"
const Title = ({title}) => {
    return (
    <>  
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-pink-600 py-5">{title}</h2>
    </>
    )
}
Title.propTypes={
    title:PropTypes.string.isRequired
}
export default Title
