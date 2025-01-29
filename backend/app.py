from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/climate-data')
def climate_data():
    # Simulated climate data
    data = {
        "temperature": [30, 32, 35, 33],
        "co2_emissions": [10, 15, 18, 16],
        # Add more data here
    }
    return jsonify(data)

@app.route('/api/heatmap-data')
def heatmap_data():
    # Simulated heatmap data (latitude, longitude, intensity)
    data = [
        {"longitude": -122.4194, "latitude": 37.7749, "intensity": 0.8},
        {"longitude": -73.9352, "latitude": 40.7306, "intensity": 0.6},
        # Add more data here
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
