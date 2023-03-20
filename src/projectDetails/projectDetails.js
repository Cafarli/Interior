import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.png";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Your client name</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>23.02.2023</td>
              </tr>
              <tr>
                <td>Link</td>
                <td>Link example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Minimal Look Bedrooms</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa,
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
            at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in
            the ipsum vel lectus bibendum commodo.
            <br />
            <br />
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
            tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
            arcu. Donec a pellentesque Cras erat enim, gravida non ante
            vitae,elequis convallis elit, in viverra felis. Donec ultrices
            tellus vitae iaculisvd porta. Proin tincidunt ligula id purus
            porttitor.
          </p>
        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={photo} />
      </div>
    </div>
  );
}
