import "./welcom.css"

export default function Welcom() {
    return (
        <div className="mx-5 px-5 py-5 mt-4" style={{ backgroundColor: "#F3F1F1" }}>
            <p style={{ fontSize: "32px", fontWeight: 600 }}>
                Welcome to our movie app
            </p>
            <p style={{ fontSize: "14px", fontWeight: 400 }}>
                Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <div className="d-flex">
                <input type="text" className="form-control" placeholder="Search and explore...." />
                <button className="btn ms-3" style={{ backgroundColor: "#FFE353", fontSize: "14px", fontWeight: 400}}>Search</button>
            </div>
        </div>
    )
}