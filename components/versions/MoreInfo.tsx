import React from 'react';

interface VersionInstructionsProps {
  version: string;
}

const VersionInstructions: React.FC<VersionInstructionsProps> = ({ version }) => {
  const getVersionContent = () => {
    switch (version) {
      case "Version 0.1":
        return (
            <p>
            How to update the changelog?
            <br/><br/>
            ● Head over to <span className="text-orange-500">components/versions</span>
            <br/><br/>
            ● Create your version like: <span className="text-blue-500">Version02.tsx</span>
            <br/><br/>
            ● Navigate to <span className="text-orange-500">pages/changelog/index.tsx</span>
            <br/><br/>
            ● Include your version in <span className="text-purple-500">versionChanges</span>
            <br/><br/>
            ● Edit <span className="text-blue-500">Version02.tsx</span> to see changes.
          </p>
        );
      case "Version 0.2":
        return (
          <p>
            How to fetch data from the blockchain?
            <br/><br/>
            ● U can now read data from the blockchain using the <span className='text-blue-500'>DataFetcher.tsx</span> component.
            <br/><br/>
            ● Add the <span className='text-orange-500'>type</span>, add the <span className='text-orange-500'>api url</span>, add the case for your <span className='text-orange-500'>type</span>.
            <br/><br/>
            ● Import and use <span className='text-green-500'>DataFetcher</span> anywhere on the page.
          </p>
        );
      default:
        return <p>No content available for this version.</p>;
    }
  };

  return (
    <div>
      {getVersionContent()}
    </div>
  );
};

export default VersionInstructions;
