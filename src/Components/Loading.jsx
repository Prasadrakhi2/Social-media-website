const Loading = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-border spinner" style={{width: "6rem", height: "6rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;