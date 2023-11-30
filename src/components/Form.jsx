function Form(props) {
  return (
    <form className={`${props.bg_color} shadow-md rounded px-8 pt-6 pb-8 mb-4`} onSubmit={e => e.preventDefault()}>
      {props.children}
    </form>
  )
}

export default Form 