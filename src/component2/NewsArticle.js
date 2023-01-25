
const NewsArticle = ({item}) => {

     /* 1.url, urlToImage, title, author, description, publishedAt */

     const {url, urlToImage, title, author, description, publishedAt} = item;

     let date = new Date(publishedAt);
     let year = date.getFullYear();
     let month = date.getMonth();
     let day = date.getDate();

    // console.log(props);
    return (
        <li>
            <a href={item.url}>
                <img src={item.urlToImage} alt={item.title} />
                <div>
                    <p>{item.author}</p>
                    <p>{item.publishedAt}</p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            </a>
        </li>
    )


}
export default NewsArticle;