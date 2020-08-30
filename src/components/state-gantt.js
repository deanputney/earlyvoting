import React from 'react';
import {
  FaSass,
  FaHtml5,
  FaReact,
  FaMobileAlt,
  FaRocket,
  FaOsi
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';

const StateGantt = () => (
  <div>
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column is-10-desktop is-offset-1-desktop">
            <table class="gantt table is-fullwidth">
              <thead>
                <th></th>
                <td colspan="45" align="right">Election Day</td>
              </thead>
              <tr>
                <td class="bars" colspan="46">
                  <table class="table is-fullwidth">
                    <tr>
                      <th>Minnesota</th>
                      <td colspan="45" class="bar">9/18</td>
                    </tr>
                    <tr>
                      <th>Michigan</th>
                      <td colspan="1"></td>
                      <td colspan="44" class="bar">9/19</td>
                    </tr>
                    <tr>
                      <th>South Dakota</th>
                      <td colspan="1"></td>
                      <td colspan="44" class="bar">9/19</td>
                    </tr>
                    <tr>
                      <th>Vermont</th>
                      <td colspan="1"></td>
                      <td colspan="44" class="bar">9/19</td>
                    </tr>
                    <tr>
                      <th>Virginia</th>
                      <td colspan="1"></td>
                      <td colspan="42" class="bar">9/19</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td colspan="4"></td>
                      <td colspan="41">
                        You could probably read all the Harry Potters if you saved this much time.
                      </td>
                    </tr>
                    <tr>
                      <th>Missouri</th>
                      <td colspan="4"></td>
                      <td colspan="41" class="bar">9/22</td>
                    </tr>
                    <tr>
                      <th>Illinois</th>
                      <td colspan="6"></td>
                      <td colspan="39" class="bar">9/24</td>
                    </tr>
                    <tr>
                      <th>Wyoming</th>
                      <td colspan="6"></td>
                      <td colspan="39" class="bar">9/24</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td colspan="16"></td>
                      <td colspan="25">Voting now would save you a whole month.</td>
                    </tr>
                    <tr>
                      <th>Maine</th>
                      <td colspan="16"></td>
                      <td colspan="25" class="bar">10/4</td>
                    </tr>
                    <tr>
                      <th>Nebraska</th>
                      <td colspan="16"></td>
                      <td colspan="29" class="bar">10/4</td>
                    </tr>
                    <tr>
                      <th>Iowa</th>
                      <td colspan="17"></td>
                      <td colspan="28" class="bar">10/5</td>
                    </tr>
                    <tr>
                      <th>Ohio</th>
                      <td colspan="17"></td>
                      <td colspan="28" class="bar">10/5</td>
                    </tr>
                    <tr>
                      <th>Indiana</th>
                      <td colspan="18"></td>
                      <td colspan="27" class="bar">10/6</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default StateGantt;
