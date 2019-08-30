import React from 'react';

function GitHubComponent(props) {
  const { match: { params } } = props;
  return (
    <div>
      In GitHubComponent <br />
      GitHub ID - {params.githubID} <br />
      TwitterID - {params.twitterID}
    </div>
  );
}

export default GitHubComponent;
