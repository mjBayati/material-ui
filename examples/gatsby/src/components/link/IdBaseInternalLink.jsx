import React, { useContext } from "react";
import FrontMatterContext from "../../context/FrontMatter.context";
import { Link as GatsbyLink } from "gatsby-link";
import { handleNavigation } from "../../util/navigation.util";
import PropTypes from "prop-types";


const IdBaseInternalLink = ({ navigationObject, id, style, children, className, idBaseClickEvent }) => {
    const templateType = useContext(FrontMatterContext).templateType;
    const isInCorrectPage = () => {
        if (!navigationObject.validPages) {
            return true;
        }
        if (navigationObject.validPages.templateType?.includes(templateType)) {
            return true;
        }
        if (typeof window !== "undefined") {
            return !!navigationObject.validPages.pages?.includes(window?.location?.pathname);
        }
        return false;
    }

    if (isInCorrectPage()) {
        return (
            <GatsbyLink
                id={id}
                style={{ textDecoration: 'none', color: 'inherit', ...style }}
                className={className}
                to={`#${navigationObject.sectionId}`}
                onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(navigationObject);
                    idBaseClickEvent()
                }}
            >
                {children}
            </GatsbyLink>
        );
    }
    return (
        <GatsbyLink
            id={id}
            style={{ textDecoration: 'none', color: 'inherit', ...style }}
            className={className}
            to={`${navigationObject.fallback}#${navigationObject.sectionId}`}
        >
            {children}
        </GatsbyLink>
    );
}

IdBaseInternalLink.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.element,
    idBaseClickEvent: PropTypes.func,
    navigationObject: PropTypes.shape({
        sectionId: PropTypes.string.isRequired,
        fallback: PropTypes.string,
        validPages: PropTypes.shape({
            templateType: PropTypes.arrayOf(PropTypes.string),
            pages: PropTypes.arrayOf(PropTypes.string)
        })
    })
}

export default IdBaseInternalLink;