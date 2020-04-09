import React, { useEffect, useState } from 'react';
import './fancyBox.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function FancyBox() {  

    return (
        <section className="section-base section-overflow-top fancy-box">
            <div class="container">
                <div class="grid-list" data-columns="4" data-columns-md="2" data-columns-sm="1">
                    <div class="grid-box">
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <i class="im-monitor-phone"></i>
                                <div class="caption">
                                    <h2>Smart softwares</h2>
                                    <p>
                                        Duis aute irure dolor in repreherita ineto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <i class="im-bar-chart2"></i>
                                <div class="caption">
                                    <h2>Trusted security</h2>
                                    <p>
                                        Lorem consectetur adipi elitsed tempono.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <i class=" im-medal"></i>
                                <div class="caption">
                                    <h2>Awards winners</h2>
                                    <p>
                                        Ariento mesfato prodo arte e eli manifesto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <i class="im-business-man"></i>
                                <div class="caption">
                                    <h2>Great experience</h2>
                                    <p>
                                        Lorem consectetur adipiscing elitsed pro.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    );
}

export default FancyBox;