import React from 'react'

import Header from '../../components/Header/Header'
import './FAQ.css'

const FAQ = () => {
  return (
    <div>
      <section class="container">
        <h1>Frequently asked questions?</h1>
        <div class="tab">
          <input type="radio" name="acc" id="acc1"/>
          <label for="acc1">
            <h2>01</h2>
            <h3>How do I apply?</h3>
          </label>
          <div class="content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Sapiente corporis sint sequi inventore voluptatibus, error sed 
              labore numquam quia. Ex!</p>
          </div>
        </div>

        <div class="tab">
          <input type="radio" name="acc" id="acc2"/>
          <label for="acc2">
            <h2>02</h2>
            <h3>Lost or forgotten your password?</h3>
          </label>
          <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur, quidem minus dignissimos tempore velit autem ut 
              pariatur consectetur excepturi reiciendis quisquam illo obcaecati! 
              Quis aspernatur ipsa molestiae, officia accusamus tenetur vel. Tempore 
              sint, atque placeat similique praesentium rerum! Aliquam ullam unde ab 
              eos delectus quod quidem odio molestiae libero ipsa.</p>
          </div>
        </div>

        <div class="tab">
          <input type="radio" name="acc" id="acc3"/>
          <label for="acc3">
            <h2>03</h2>
            <h3>How can I make a change to my application?</h3>
          </label>
          <div class="content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
              elit. Nemo corporis possimus commodi quisquam voluptatibus
              repellendus, autem nam quis at. Soluta.</p>
          </div>
        </div>

        <div class="tab">
          <input type="radio" name="acc" id="acc4"/>
          <label for="acc4">
            <h2>04</h2>
            <h3>How can I update my name?</h3>
          </label>
          <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis, architecto dolores. Consectetur cum consequuntur 
              maxime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
