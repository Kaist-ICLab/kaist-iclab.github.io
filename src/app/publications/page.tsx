import MainContent from "@/components/Main";
import PublicationBrowser from "@/components/publications/PublicationBrowser";
import publications from "@data/publications";

const Publications: React.FC = () => (
  <MainContent>
    <PublicationBrowser publications={publications} />
  </MainContent>
)

export default Publications;
