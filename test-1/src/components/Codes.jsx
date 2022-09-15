function Codes({codes}) {
    return (
        <div>
            {
                codes.map(c=><div>{c["Code"]}</div>)
            }
        </div>
    )
}

export default Codes;