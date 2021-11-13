import React from 'react';
import "./About.css"

const About = () =>
{
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm text-center">
                    <h1 class="div-heading display-4">Contact US</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <form>
                        <div class="form-group">
                            <input type="name" class="form-control" id="exampleInputName" placeholder="Your Full Name..." />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..." />
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="exampleFormControlSelect1" placeholder="Select Services...">
                                <option>Corporate</option>
                                <option>Wedding</option>
                                <option>Pickup</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning btn-lg btn-block">Submit</button>
                    </form>
                </div>
                <div class="col-md-6">
                    <h5>Address: <small class="text-muted">Venkatadri IT Park, HP Avenue, Konnappana, Electronic city, Bengaluru, Karnataka 560069</small></h5>
                    <h5>Email: <small class="text-muted">hire@luxurytaxicab.com</small></h5>
                    <h5>Contact: <small class="text-muted">+91 98765 10278 || +91 76589 14244</small></h5>


                </div>

            </div>
        </div>
    );
};

export default About;