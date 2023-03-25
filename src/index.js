import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const books = [
    {
        img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61NdJMwAThS._AC_UL600_SR600,400_.jpg",
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk M.D.",
        id: 1
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/912iiFEK2wL._AC_UL600_SR600,400_.jpg",
        title: "Hello Beautiful (Oprah's Book Club): A Novel",
        author: "Ann Napolitano",
        id: 2
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71ZvnK+4JiL._AC_UL600_SR600,400_.jpg",
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        id: 3
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81hHy5XrdKL._AC_UL600_SR600,400_.jpg",
        title: "The Four Agreements",
        author: "Don Miguel Ruiz",
        id: 4
    },
]


function BookList() {

    return (
        <div>
            <h1 className="title">Amazon Best Sellers</h1>
            <section className="booklist">
                {
                    books.map((book, index) => {
                        const { img, title, author, id, number } = book
                        return <Book img={img} key={id} number={index} title={title} author={author} />
                    })
                }
            </section>
        </div>
    )


};



function Book(props) {
    const { img, title, author, number } = props;
    return (<div>
        <article className="book">
            <span>{number + 1}</span>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    </div>)
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)