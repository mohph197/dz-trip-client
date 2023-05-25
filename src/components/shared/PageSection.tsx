import { FunctionComponent } from "react";

type PageSectionProps = {
    name: string;
    children: React.ReactNode;
    className?: string;
    title?: boolean;
}

const POSITIONS = ['relative', 'absolute', 'fixed', 'sticky'];
 
const PageSection: FunctionComponent<PageSectionProps> = ({ name, children, className, title }) => {
    return (
        <section id={name.toLowerCase()} className={`w-full pt-16 md:pt-20 ${className && POSITIONS.some((position) => className.includes(position)) ? '' : 'relative'} ${className ? className : ''}`}>
            {children}
        </section>
    );
}
 
export default PageSection;