import React, { useState } from "react";
import $ from "jquery";
import '../css/timeline.css'

export const Timeline = () => {
  const [selectedFaq, setSelectedFaq] = useState("");

  const handleFaqClick = (id) => {
    const hideSec = "faq-hide";
    const $class = "." + $(".about-" + id).attr("class").replace(hideSec, "");

    $("#faq-wrapper").addClass(hideSec);
    $(".about-" + id).removeClass(hideSec);
    $("div[class*=about]").not($class).addClass(hideSec);

    if (selectedFaq === id) {
      setSelectedFaq("");
    } else {
      setSelectedFaq(id);
    }
  };

  const handleFaqAccordionClick = (e) => {
    e.preventDefault();
    const expand = "expanded";
    const content = $(".faq-content");

    if ($(e.target).hasClass(expand)) {
      $(e.target).removeClass(expand);
      $(e.target).parent().children("ul").stop(true, true).slideUp();
    } else {
      $(".faq-accordion > li > a.expanded").removeClass(expand);
      $(e.target).addClass(expand);
      content.filter(":visible").slideUp();
      $(e.target).parent().children("ul").stop(true, true).slideDown();
    }
  };
  
  return (
    <div>
        <div class="container">
        <div className="title">
    <h3>FAQ</h3>
</div>
  <div id="faq-links">
    <div id="service" onClick={() => handleFaqClick("service")} class={selectedFaq === "service" ? "faq-selected" : ""}>service</div>
    <div id="installation" onClick={() => handleFaqClick("installation")} class={selectedFaq === "installation" ? "faq-selected" : ""}>installation</div>
    <div id="plan" onClick={() => handleFaqClick("plan")} class={selectedFaq === "plan" ? "faq-selected" : ""}>plan</div>
    <div id="features" onClick={() => handleFaqClick("features")} class={selectedFaq === "features" ? "faq-selected" : ""}>features</div>
    <div id="mobile" onClick={() => handleFaqClick("mobile")} class={selectedFaq === "mobile" ? "faq-selected" : ""}>mobile</div>
  </div>

  <div id="faq-wrapper" class="about-service faq-hide">

    <div class="faq-group">
      <div class="slide-left">
        <div>service</div>
      </div>
      {/* <hr> */}
    </div>
    <div class="slide-left">
      <div class="faq">
        <ul class="faq-accordion">

          <li>
            <div onClick={handleFaqAccordionClick}>insane ipsum</div>
            <ul class="faq-content">
              <li>
                <div>
                  <p>Bacon ipsum dolor sit amet ham beef ribs pork, sirloin tail meatball filet mignon pancetta strip steak. T-bone swine turducken fatback beef ribs andouille meatball. Corned beef short ribs ribeye, hamburger brisket venison capicola boudin filet mignon drumstick shankle bacon beef. Shoulder shank filet k.</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="about-installation faq-hide">

    <div class="faq-group">
      <div class="slide-left">
        <div>installation</div>
      </div>
      {/* <hr> */}
    </div>

    <div class="slide-left">
      <ul class="faq-accordion">

        <li>
        <div onClick={handleFaqAccordionClick}>insane ipsum</div>
          <ul class="faq-content">
            <li>
              <div>
                <p>Bacon ipsum dolor sit amet ham beef ribs pork, sirloin tail meatball filet mignon pancetta strip steak. T-bone swine turducken fatback beef ribs andouille meatball. Corned beef short ribs ribeye, hamburger brisket venison capicola boudin filet mignon drumstick shankle bacon beef. Shoulder shank filet mignon, kevin meatball beef ribs short loin shankle kielbasa jowl pancetta. Biltong shank tri-tip prosciutto sirloin pastrami. Turkey swine pork loin ground round pig chicken kielbasa sausage kevin ham hock.</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>

  <div class="about-plan faq-hide">

    <div class="faq-group">
      <div class="slide-left">
        <div>plan</div>
      </div>
      {/* <hr> */}
    </div>
    <div class="slide-left">
      <ul class="faq-accordion">

        <li>
        <div onClick={handleFaqAccordionClick}>insane ipsum</div>
          <ul class="faq-content">
            <li>
              <div>
                <p>Bacon ipsum dolor sit amet ham beef ribs pork, sirloin tail meatball filet mignon pancetta strip steak. T-bone swine turducken fatback beef ribs andouille meatball. Corned beef short ribs ribeye, hamburger brisket venison capicola boudin filet mignon drumstick shankle bacon beef. Shoulder shank filet mignon, kevin meatball beef ribs short loin shankle kielbasa jowl pancetta. Biltong shank tri-tip prosciutto sirloin pastrami. Turkey swine pork loin ground round pig chicken kielbasa sausage kevin ham hock.</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="about-features faq-hide">

    <div class="faq-group">
      <div class="slide-left">
        <div>features</div>
      </div>
      {/* <hr> */}
    </div>
    <div class="slide-left">
      <ul class="faq-accordion">

        <li>
        <div onClick={handleFaqAccordionClick}>insane ipsum</div>
          <ul class="faq-content">
            <li>
              <div>
                <p>Bacon ipsum dolor sit amet ham beef ribs pork, sirloin tail meatball filet mignon pancetta strip steak. T-bone swine turducken fatback beef ribs andouille meatball. Corned beef short ribs ribeye, hamburger brisket venison capicola boudin filet mignon drumstick shankle bacon beef. Shoulder shank filet mignon, kevin meatball beef ribs short loin shankle kielbasa jowl pancetta. Biltong shank tri-tip prosciutto sirloin pastrami. Turkey swine pork loin ground round pig chicken kielbasa sausage kevin ham hock.</p>
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>

  <div class="about-mobile faq-hide">

    <div class="faq-group">
      <div class="slide-left">
        <div>mobile</div>
      </div>
      {/* <hr> */}
    </div>
    <div class="slide-left">
      <ul class="faq-accordion">

        <li>
        <div onClick={handleFaqAccordionClick}>insane ipsum</div>
          <ul class="faq-content">
            <li>
              <div>
                <p>Bacon ipsum dolor sit amet ham beef ribs pork, sirloin tail meatball filet mignon pancetta strip steak. T-bone swine turducken fatback beef ribs andouille meatball. Corned beef short ribs ribeye, hamburger brisket venison capicola boudin filet mignon drumstick shankle bacon beef. Shoulder shank filet mignon, kevin meatball beef ribs short loin shankle kielbasa jowl pancetta. Biltong shank tri-tip prosciutto sirloin pastrami. Turkey swine pork loin ground round pig chicken kielbasa sausage kevin ham hock.</p>
              </div>
            </li>
          </ul>
        </li>

        <li>
        <div onClick={handleFaqAccordionClick}>insane ipsum</div>
          <ul class="faq-content">
            <li>
              <div>
                <p>Bacon ipsum dolor sit amet ham beef ribs pork, sirloin tail meatball filet mignon pancetta strip steak. T-bone swine turducken fatback beef ribs andouille meatball. Corned beef short ribs ribeye, hamburger brisket venison capicola boudin filet mignon drumstick shankle bacon beef. Shoulder shank filet mignon, kevin meatball beef ribs short loin shankle kielbasa jowl pancetta. Biltong shank tri-tip prosciutto sirloin pastrami. Turkey swine pork loin ground round pig chicken kielbasa sausage kevin ham hock.</p>
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</div>
    </div>
  )
}
