export default function scroll() {

    return (
        <div className="flex flex-col">
            <h3 className="mt-24 flex justify-center text-5xl">I work with...</h3>
                <div className="flex-row-scroll">
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    React
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    Next.js
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    Vite
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills ">
                    HTML
                  </div>
                  <div className=" h-32 w-32 rounded-full flex items-center justify-center skills">
                    CSS
                  </div>
              </div>
          </div>
    )
}