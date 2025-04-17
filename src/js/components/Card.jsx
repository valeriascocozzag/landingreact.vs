const Card = () => {
    return (
        <div className="card h-200 m-2" style={{ height: '400px', objectFit: 'cover' }}>
            <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Card title</h5>
                <p className="card-text flex-grow-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.
                </p>
                <a href="#" className="btn btn-primary mt-auto">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;
