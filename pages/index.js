import {Component} from 'react'
import Link from 'next/link'
import api from '../api'
import withLayout from '../components/withLayout'
import Moment from 'react-moment'


class Index extends Component {
  static async getInitialProps() {
    const posts = await api.posts().embed();
    return { posts };
  }

  render() {
    const { posts } = this.props;

    return (        
      <div>
        <h1 className="title">Welcome</h1>
        <p className="description">Follow along as I build a little blogging space from scratch.</p>
          {
            posts.map( post => (
              <div className="row">
                <Link
                    href={{
                      pathname: '/post',
                      query: {
                        slug: post.slug,
                      },
                    }}
                  >
                  <a className="card">
                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <p className="timeStamp">
                      <Moment format="MM/DD/YYYY">
                        {post.date}
                      </Moment>
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </a>
                </Link>
              </div>
            ))
          }
    </div>
    )
  }
}

export default withLayout(Index)
