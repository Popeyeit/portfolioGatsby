import React, { useState } from "react"
import Layout from "../components/Layout"

const initState = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const [valueForm, setValue] = useState(initState)

  const postData = async () => {
    const res = await fetch("https://formspree.io/f/xdoprbdl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(valueForm),
    })
    console.log(res)
    if (res.status === 200) {
      alert("your message successfully send")
      setValue(initState)
    }
  }
  // action="https://formspree.io/f/xdoprbdl" method="POST"
  const changeValue = ({ target }) => {
    const { value, name } = target
    setValue({ ...valueForm, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    postData()
  }
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="text"
                name="name"
                value={valueForm.name}
                onChange={changeValue}
              />
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={valueForm.email}
                onChange={changeValue}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                value={valueForm.message}
                onChange={changeValue}
              ></textarea>
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
