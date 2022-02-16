import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  articles = []
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    this.props.setProgress(10)
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData =await data.json();
    this.props.setProgress(70)
    console.log(parsedData)
    this.setState({articles: parsedData.articles,
    loading: false})
    this.props.setProgress(100)
  }
  render() {
    return <div className="container my-3">
         <div className="row">
           <h1 className='text-center' style={{margin: "35px 0px",marginTop: "90px"}} >24Ghanta - Top headlines</h1>
           {this.state.loading && <Spinner/>}
           {!this.state.loading && this.state.articles.map((elements)=>{
             return  <div className='col-md-4' key={elements.url}>
             <Newsitem title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0, 88):""} imageUrl={!elements.urlToImage?"https://images.hindustantimes.com/tech/img/2022/02/13/1600x900/WIndows_11_warning_1644735416821_1644735439069.jpg":elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name}/>
           </div>
           })}
          
          </div>
    </div>;
  }
}

export default News;
