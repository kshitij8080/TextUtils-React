import React, {useState} from 'react'

export default function AboutUs() {

    const [MyStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(MyStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

  return (
    <div className="container" style={MyStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h3><b> About Us</b></h3>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>Welcome to TextUtils, your all-in-one solution for text management and enhancement! Whether you're a writer, student, or professional, our app offers a suite of powerful tools to streamline your text-related tasks.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <h3> <b>Key Features</b></h3>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>1.Text Editing: Edit, format, and refine your text effortlessly.<br/>
      2.Word Count: Instantly know the number of words and characters in your text.<br/>
      3.Text Conversion: Convert text between UpperCase to LowerCase & LowerCase to UpperCase.
      </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <h3> <b> Why Choose Us?</b></h3>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong> 1.User-friendly interface<br/>
                 2.Fast and reliable performance<br/>
                 3.Privacy-focused: Your data is secure
                 </strong>
      </div>
    </div>
  </div>
  <div className="container my-3">
  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
  </div>
</div>
    </div>
  )
}
