import { useState } from "react";
export const Section = ({ title, description, isVisible,setIsVisible }) => {
  
  return (
    <>
      <div className="border border-black p-2 m-2">
        <h3 className="font-bold ">{title} </h3>

        {isVisible ? (
          <button
            className="show curser pointer underline"
            onClick={() => setIsVisible(false)}
          >
            hide
          </button>
        ) : (
          <button
            className="show curser pointer underline"
            onClick={() => setIsVisible(true)}
          >
            show
          </button>
        )}
        {isVisible && <p className="">{description} </p>}
      </div>
    </>
  );
};

export const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("About")
  return (
    <div>
      <Section
        title={"About Instamart "}
        description={
          "Files are available under licenses specified on their description page. All structured data from the file namespace is available under the Creative Commons CC0 License; all unstructured text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and the Privacy Policy."
        }
        isVisible={visibleSection==="About"}
        setIsVisible={()=> setVisibleSection("About")}
      />
      <Section
        title={"Team Instamart "}
        description={
          "Files are available under licenses specified on their description page. All structured data from the file namespace is available under the Creative Commons CC0 License; all unstructured text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and the Privacy Policy."
        }
        isVisible={visibleSection==="Team"}
        setIsVisible={()=> setVisibleSection("Team")}
      />
      <Section
        title={"Carrer Instamart "}
        description={
          "Files are available under licenses specified on their description page. All structured data from the file namespace is available under the Creative Commons CC0 License; all unstructured text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and the Privacy Policy."
        }
        isVisible={visibleSection==="Carrer"}
        setIsVisible={()=> setVisibleSection("Carrer")}
      />
    </div>
  );
};
