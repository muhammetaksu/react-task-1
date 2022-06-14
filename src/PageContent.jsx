import React from "react";
import About from "./About";
import Contact from "./Contact";
import ImageOfLocation from "./ImageOfLocation";
import ProjectSection from "./ProjectSection";

function PageContent() {
    return (
        <>
            {/* Page content */}

            <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
                <ProjectSection></ProjectSection>
                <About></About>
                <Contact></Contact>
                <ImageOfLocation></ImageOfLocation>

                {/* End page content */}
            </div>
        </>
    );
}

export default PageContent;
