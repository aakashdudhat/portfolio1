import React from 'react';
import Ecommerce from './img/beauty.png';
import frutikha from './img/frutikha.png';
import ADMIN  from './img/admin.png';



function Portfolio() {
    return (
        <>
            <div id="potfolio">
                <div className="container" id="port">
                    <div className="row">
                        <div className="portfolio col-md-12">
                            <h2 text-light mt-2 ms-4>Portfolio</h2>
                        </div>
                    </div>


                    <ul class="nav nav-pills mb-3  ms-4 mt-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Group Projects</button>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div className="row m-2 pt-4">
                                <div className="website col-md-4 border-none" >
                                    <button id='buto'><a href="https://aakashdudhat.github.io/beauty-web/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={Ecommerce} alt="" />
                                    <div className="devlop">
                                        <h3>Ecommerce Website</h3>
                                        <h5>Web Design</h5>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href=" https://aakashdudhat.github.io/frutikha/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={frutikha} alt="" />
                                    <div className="devlop">
                                        <h3>frutikha Website</h3>
                                        <h5>Web Design</h5>
                                    </div>
                                </div>
                                <div className="website col-md-4 border-none">
                                    <button id='buto'><a href="https://aakashdudhat.github.io/admin-panal/"><i class="bi bi-eye-fill"></i></a></button>
                                    <img src={ADMIN} alt="" />
                                    <div className="devlop">
                                        <h3>Admin panel</h3>
                                        <h5>Web Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                      

                    </div>

                </div>
            </div>
        </>
    )
}
export default Portfolio
