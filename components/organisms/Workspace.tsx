import VerticalDivider from "components/atoms/VerticalDivider";
import LeftPane from "components/molecules/LeftPane";
import RightPane from "components/molecules/RightPane";


interface Props { }


const Workspace = (props: Props) => {

    return (
        <main className={`bg-white flex flex-1 flex-row`}>
            <div className={`flex-1 h-full`}>
                <LeftPane />
            </div>
            <VerticalDivider />
            <div className={`flex-1`}>
                <RightPane />
            </div>
        </main>
    );
}

export default Workspace;