import json

def transform_to_nivo(input_file, output_file):
    """
    Transforms a JSON file to a Nivo-compatible format.
    
    Args:
    - input_file (str): Path to the input JSON file.
    - output_file (str): Path to save the transformed JSON file.
    """
    try:
        # Load the input JSON
        with open(input_file, "r") as f:
            data = json.load(f)
        
        # Transform data into Nivo-compatible format
        nivo_data = [
            {
                "id": entry["School Description"],
                "data": [
                    {"x": year, "y": value}
                    for year, value in entry.items()
                    if year != "School Description" and value is not None
                ],
            }
            for entry in data
        ]
        
        # Save the transformed data
        with open(output_file, "w") as f:
            json.dump(nivo_data, f, indent=4)
        
        print(f"Transformed data saved to {output_file}")
    except Exception as e:
        print(f"Error transforming data: {e}")

# Example usage
input_file = "test2.json"
output_file = "test12.json"
transform_to_nivo(input_file, output_file)