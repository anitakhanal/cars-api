export default `
SELECT
  c.id,
  c.manufacture_id,
  m.name AS manufacture_name,
  c.model,
  c.horsepower,
  c.created_at,
  STRING_AGG(ci.image_url, ',') AS images
FROM cars c
INNER JOIN manufactures m on c.manufacture_id = m.id
LEFT JOIN car_images ci ON ci.car_id = c.id
GROUP BY c.id, c.manufacture_id, m.name, c.model, c.horsepower,  c.created_at
`;