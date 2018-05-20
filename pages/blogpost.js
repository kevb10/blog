import {Component} from 'react'
import Link from 'next/link';
import api from '../api';
import withLayout from "../components/withLayout"

class BlogPost extends Component {
  static async getInitialProps({ query: { slug } }) {
    const post = await api.posts().slug(slug).embed();
    return { post: post[0] };
  }

  render() {
    const { post } = this.props;

    return (
      <div className="row">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p>{post.date}</p>
          <p>By {post._embedded.author[0].name}</p>
          {
          !!post._embedded['wp:featured_media'] &&
          <img
              width={500}
              src={post._embedded['wp:featured_media'][0].source_url}
              alt={post._embedded['wp:featured_media'][0].alt_text}
          />
          }
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
}

export default withLayout(BlogPost);