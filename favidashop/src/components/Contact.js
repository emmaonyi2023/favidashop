import React from 'react'

function Contact() {
  return (
    <>
    <section>
        <div className="container-fluid bg-light py-5">
            <div className="col-md-6 m-auto text-center">
                <h1 className="h1">Contact Us</h1>
                <p>
                    Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    </section>
    <section className="shop-newsletter section">
		<div className="container">
			<div className="inner-top">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 col-12">
						<div className="inner">
							<h4>Newsletter</h4>
							<p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
							<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
								<input name="EMAIL" placeholder="Your email address" required="" type="email" />
								<button className="btn">Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Contact
