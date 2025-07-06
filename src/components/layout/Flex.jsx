

const Flex = ({ children, className = "", style = {} }) => (
  <div className={`flex ${className}`} style={style}>
    {children}
  </div>
); 

export default Flex