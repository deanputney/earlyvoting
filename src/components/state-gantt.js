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
                <td colspan="3">9/19</td>
                <td colspan="35"></td>
                <td colspan="7" align="right">Election Day</td>
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
                      <td></td>
                      <td colspan="2" class="gantt-bar"></td>
                    </tr>
                    <tr>
                      <th>South Dakota</th>
                      <td colspan="1"></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Vermont</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Virginia</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Missouri</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Illinois</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Wyoming</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Maine</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Nebraska</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Iowa</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Ohio</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
                    </tr>
                    <tr>
                      <th>Indiana</th>
                      <td></td>
                      <td colspan="2" class="bar"></td>
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
