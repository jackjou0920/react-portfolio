import React, { Component } from 'react';
import ReactTooltip from "react-tooltip";
import '.././App.css';

class Timeline extends Component {

    render() {
        return (
            <section id="timeline" className="timeline-area gray-bg pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-30">
                                <h2 className="title">My Timeline</h2>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-badge primary">
                                        <a><i className="glyphicon glyphicon-record" data-tip="" data-for="tip1"></i></a>
                                    </div>
                                    <ReactTooltip id="tip1" place="right" type="light" effect="float">
                                        21st July 2020 ~ Present
                                    </ReactTooltip>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <img className="img-responsive" src="http://lorempixel.com/1600/500/sports/2" />
                                        </div>
                                        <div className="timeline-body">
                                            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <a><i className="glyphicon glyphicon-thumbs-up"></i></a>
                                            <a><i className="glyphicon glyphicon-share"></i></a>
                                            <a className="pull-right">Continuar Lendo</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="timeline-inverted">
                                    <div className="timeline-badge primary">
                                        <a><i className="glyphicon glyphicon-record invert" data-tip="" data-for="tip2"></i></a>
                                    </div>
                                    <ReactTooltip id="tip2" place="left" type="light" effect="float">
                                        23rd Oct. 2019 ~ 10th Jan. 2020
                                    </ReactTooltip>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <img className="img-responsive" src="http://lorempixel.com/1600/500/sports/2" />
                                        </div>
                                        <div className="timeline-body">
                                            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>

                                        </div>
                                        <div className="timeline-footer">
                                            <a><i className="glyphicon glyphicon-thumbs-up"></i></a>
                                            <a><i className="glyphicon glyphicon-share"></i></a>
                                            <a className="pull-right">Continuar Lendo</a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="timeline-badge primary">
                                        <a><i className="glyphicon glyphicon-record" data-tip="" data-for="tip3"></i></a>
                                    </div>
                                    <ReactTooltip id="tip3" place="right" type="light" effect="float">
                                        16th Sep. 2018 ~ 1st Nov. 2019
                                    </ReactTooltip>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <img className="img-responsive" src="http://lorempixel.com/1600/500/sports/2" />
                                        </div>
                                        <div className="timeline-body">
                                            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <a><i className="glyphicon glyphicon-thumbs-up"></i></a>
                                            <a><i className="glyphicon glyphicon-share"></i></a>
                                            <a className="pull-right">Continuar Lendo</a>
                                        </div>
                                    </div>
                                </li>

                                <li  className="timeline-inverted">
                                    <div className="timeline-badge primary">
                                        <a><i className="glyphicon glyphicon-record invert" data-tip="" data-for="tip4"></i></a>
                                    </div>
                                    <ReactTooltip id="tip4" place="left" type="light" effect="float">
                                        25th Jun. 2018 ~ 31st Aug. 2018
                                    </ReactTooltip>
                                    <div className="timeline-panel">
                                        <div className="timeline-body">
                                            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <a><i className="glyphicon glyphicon-thumbs-up"></i></a>
                                            <a><i className="glyphicon glyphicon-share"></i></a>
                                            <a className="pull-right">Continuar Lendo</a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="timeline-badge primary">
                                        <a><i className="glyphicon glyphicon-record" data-tip="" data-for="tip5"></i></a>
                                    </div>
                                    <ReactTooltip id="tip5" place="right" type="light" effect="float">
                                        Sep. 2014 ~ June. 2018
                                    </ReactTooltip>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <img className="img-responsive" src="http://lorempixel.com/1600/500/sports/2" />
                                        </div>
                                        <div className="timeline-body">
                                            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                        </div>
                                        <div className="timeline-footer">
                                            <a><i className="glyphicon glyphicon-thumbs-up"></i></a>
                                            <a><i className="glyphicon glyphicon-share"></i></a>
                                            <a className="pull-right">Continuar Lendo</a>
                                        </div>
                                    </div>
                                </li>

                                <li  className="timeline-inverted">
                                    <div className="timeline-badge primary">
                                        <a><i className="glyphicon glyphicon-record invert" data-tip="" data-for="tip6"></i></a>
                                    </div>
                                    <ReactTooltip id="tip6" place="right" type="light" effect="float">
                                        Sep. 2011 ~ June. 2014
                                    </ReactTooltip>
                                    <div className="timeline-panel">
                                        <div className="timeline-body">
                                            <p><b>All the credits go to <a href="http://bootsnipp.com/rafamaciel">Rafamaciel</a></b></p>
                                            <p>I only make it responsive and remove the empty spaces to be more like Facebook timeline!</p>
                                        </div>
                                        <div className="timeline-footer primary">
                                            <a><i className="glyphicon glyphicon-thumbs-up"></i></a>
                                            <a><i className="glyphicon glyphicon-share"></i></a>
                                            <a className="pull-right">Continuar Lendo</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="clearfix"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Timeline;