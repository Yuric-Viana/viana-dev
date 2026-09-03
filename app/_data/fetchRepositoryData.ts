import { Octokit } from "octokit";

export async function fetchRepositoryData(nameRepository: string) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repository = await octokit.request(
    "GET /repos/{owner}/" + nameRepository,
    {
      owner: "Yuric-Viana",
      repo: nameRepository,
      headers: {
        "X-GitHub-Api-Version": "2026-03-10",
      },
    }
  );

  const date = repository.data.created_at
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");

  const nameFormatted = repository.data.name
    .replace("-", " ")
    .split(" ")
    .map(
      (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return {
    date,
    nameFormatted,
    repository: repository.data,
  };
}