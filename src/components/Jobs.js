import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"

const query = graphql`
  {
    jobs: allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        id
        desc {
          name
          id
        }
        strapiId
      }
    }
  }
`

const Jobs = () => {
  const {
    jobs: { nodes },
  } = useStaticQuery(query)
  const [value, setValue] = useState(0)
  const { company, position, desc, date } = nodes[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {nodes.map((item, idx) => {
            return (
              <button
                key={item.strapiId}
                type="button"
                onClick={() => setValue(idx)}
                className={`job-btn ${value === idx && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
