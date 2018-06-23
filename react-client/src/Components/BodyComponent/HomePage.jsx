import React, { Component } from 'react';
import monkey from "./../../pics/monkey.jpg";
//import PlayVideo from './PlayVideo';
import example from "./../../videos/example.mp4";
import webm from "./../../videos/180P_225K_6394641.webm";
import { Link } from 'react-router-dom';



class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  
  play() {
    var av = this.refs.playDemo;  
    av.autoplay = true;
    av.load();
    console.log(av)
  }
  pause() {
    this.setState({isVisible: true}) //clear video
    var av = this.refs.playDemo;
    av.autoplay = false;
    av.load();

  }
  render() {
    return (
    <body>
      <div class="wrap">
        <div class="content flex">
          <div class="main">
            <section class="thumb-list videos">
              <div class="column">
                <div class="item rollable">
                  <div class="thumb" onMouseOver={this.play.bind(this)} onMouseLeave={this.pause.bind(this)} onMouseEnter={()=>this.setState({isVisible: false})} >
                    <Link to="/PlayVideo" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      {this.state.isVisible ? (
                        <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" data-mediabook={example} class="img_video_list js-videoThumb thumb js-videoPreview" data-thumb_url={monkey} data-mediumthumb={monkey} />
                      ):null}
                      <video ref="playDemo" muted loop src={webm} ></video>
                      <span class="hd"><span>HD</span></span>
                      <span class="duration">
                        6:03
                       </span>
                    </Link>
                  </div>
                  <h3>
                    <Link to="/PlayVideo" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard
                      </Link>
                  </h3>
                  <span class="video_count">
                    32,761 views
                    </span>
                  <span class="video_percentage">71%</span>
                </div>

                <div class="item rollable newest">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                      </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

              </div>
              <div class="column1">
                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                      </a>
                  </h3>
                </div>

                <div class="item rollable newest">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
          </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
          </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>
              </div>

              <div class="column2">
                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                     </a>
                  </h3>
                </div>

                <div class="item rollable newest">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                      </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                      </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>
              </div>

              <div class="column3">
                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                     </a>
                  </h3>
                </div>

                <div class="item rollable newest">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                      </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>

                <div class="item rollable">
                  <div class="thumb">
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">
                      <img src={monkey} alt="Sexy Teen Blonde Fucked Hard And Cummed On Face" />
                      <span class="hd"><span>HD</span></span>
                    </a>
                  </div>
                  <h3>
                    <a href="" title="Sexy Teen Blonde Fucked Hard And Cummed On Face">Sexy Teen Blonde Fucked Hard And Cummed On Face
                    </a>
                  </h3>
                </div>
              </div>
            </section>
            <br />
            <nav class="flex align-center justify-center">
              <ul class="pagination pagination-lg">
                <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </body >

    )
  }
}
export default HomePage;

