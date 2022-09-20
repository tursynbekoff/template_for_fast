import React from "react";

const mockList = [0,1,2,3,4,5,6,7,8,9];

const LoadingView = () => {

  return (
    <div className="result">
      <h2 className="result-text loading">
        Loading
      </h2>
      <div className={`card-wrapper false-list`}>
        {
          mockList.map((item) => {
            return (
              <div key={`loading-${item}`} className={`card card__false-list animated-background`}>
                {
                  <img src={`https://res.cloudinary.com/tursynbekoff/image/upload/w_50/v1662125174/no-image-1024x1024.png`}/>
                }
                <h3 className="title">
                  {" "}
                </h3>
                <p className="author">
                  {" "}
                </p>

                <p className="publish-year">
                  {" "}
                </p>
                <p className="isbn">
                  {" "}
                </p>

              </div>
            )
          })
        }
      </div>
    </div>
    
    
  )
}

export default LoadingView;