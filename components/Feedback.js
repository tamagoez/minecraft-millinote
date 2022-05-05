function GetHeight() {
    if (typeof window !== "undefined") {
        return window.innerHeight * 0.75 - 22;
    } else {
        return 300;
    }
}

export default function Feedback() {
    // Email
    // minecraft-ripenote@quicksend.ch
    return (
        <>
            <input type="checkbox" id="feedback-modal" className="modal-toggle" />
            <label htmlFor="feedback-modal" className="modal cursor-pointer">
                <label className="modal-box relative h-3/4 w-5/6 md:w-4/6" htmlFor="">
                    <div className="w-full h-full">
                        <iframe width="100%" height={GetHeight()} src="https://m.kuku.lu/f.php?796acf2864" />
                    </div>
                </label>
            </label>
        </>
    )
}