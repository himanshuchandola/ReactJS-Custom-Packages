import React from 'react'
import "./Header.css";

type SearchProps = {
    searchPlaceholderText?: string;

};

export function Search(props: SearchProps) {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="search-block">
                                <div className="d-flex align-items-center">
                                    <span className="search-icon">
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/jhDdNi5.png"
                                            alt="image"
                                        />
                                    </span>
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder={props.searchPlaceholderText || "Search items, collections..."}
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
