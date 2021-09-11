import React from 'react';
import { graphql } from 'gatsby';
import RecipeList from '../components/RecipesList';
import Layout from '../components/Layout';
import SEO from '../components/SEO'


const TagTemplate = ({ data, pageContext }) => {
	const recipes = data.allContentfulRecipe.nodes;
	return (
		<Layout>
		<SEO title={pageContext.tag}/>
			<h2>tag template page</h2>
			<h2>{pageContext.tag}</h2>
			<div className="tag-recipes">
				<RecipeList recipes={recipes} />
			</div>
		</Layout>
	);
};
export const query = graphql`
	query GetRecipeBytag($tag: String) {
		allContentfulRecipe(sort: { fields: title, order: ASC }, filter: { content: { tags: { eq: $tag } } }) {
			nodes {
				title
				id
				prepTime
				cookTime
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
export default TagTemplate;
