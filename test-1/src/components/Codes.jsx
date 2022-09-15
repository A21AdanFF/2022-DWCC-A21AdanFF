function Codes({ codes }) {
    return (
        <>
            <h1 className="text-2xl font-bold">Useless Codes</h1>
            <div className="border-black border-[1px] p-2 rounded-sm grid grid-cols-2 gap-2 shadow-md">
                {
                    codes.map(c => <div className=
                        "flex justify-center border-black border-[1px] p-1 rounded-sm shadow-md \
                    transition-all duration-200 hover:bg-zinc-100 \
                    cursor-pointer"
                    >{c["Code"]}</div>)
                }
            </div>
        </>
    )
}

export default Codes;