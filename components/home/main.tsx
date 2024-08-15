import React from 'react'

function MainHome() {
    return (
        <main className="min-h-[80vh] flex flex-col justify-center items-start px-32 bg-[url('/img/bg-home.png')] bg-no-repeat bg-cover bg-right-bottom relative z-10 before:content-[''] before:absolute before:w-full before:h-full before:block before:bg-gradient-to-b before:from-transparent before:from-60% before:to-black before:to-95% before:-z-10 before:top-0 before:left-0">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-semibold">
                    IURIS: Of One&apos;s Own Right,<br />
                    A Universe of Opportunities
                </h1>
                <h2 className="text-base">
                    Unlock Growth Potential with Human-AI Synergy, Comprehensive<br />Consultation, and Profit Opportunities for Corporate Excellence.
                </h2>
            </div>
        </main>
    )
}

export default MainHome