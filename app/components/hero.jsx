

export function Hero() {
    return (
        <div className="container-fluid p-0 fade-in">
            <div className="row">
                <div className="col-md-5">
                    <h2 className="text-bleubarry">Good Morning ,<span className="text-name h2 ms-2">Selena!</span> </h2>
                    <p className="text-secondary small">I hope your day is going well and you are staying healthy !</p>
                </div>
                <div className="col-md-7 d-flex justify-content-end">
                    <button className="btn btn-primary text-white rounded-5 "><i className="fa-solid fa-plus"></i> check new</button>
                </div>
            </div>
        </div>
    );
}