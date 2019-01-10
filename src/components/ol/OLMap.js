import React, {Component} from 'react';
import ol from 'openlayers';
export default class OLMap  extends Component{
    constructor(props){
        super(props);
        let map,view,vecLayer;
        this.vecLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        const {maxZoom,minZoom, zoom,latitude,longitude} =this.props
        this.view = view = new ol.View({
            // projection: 'EPSG:4326',//WGS84
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: zoom,
            maxZoom,
            minZoom,
        });
        
    }
    init(){
        console.log('xxx',this.map)
        if(!document.getElementById('olmap')){
            return <div></div>
        }
        if(this.map){
            return <div></div>
        }
        this.map  = new ol.Map({
            target: 'olmap',
            layers: [this.vecLayer],
            view: this.view,
            // controls: ol.control.defaults().extend([
            //     new ol.control.FullScreen(), //全屏控件
            //     new ol.control.ScaleLine(), //比例尺
            //     new ol.control.OverviewMap(), //鹰眼控件
            //     new ol.control.Rotate(),
            //     new ol.control.ZoomSlider()
            //  ]),
        });
        return <div></div>
    }

    changeView(){
        if(!this.map){
            return
        }
        console.log(this.props)
        const {maxZoom,minZoom, zoom,latitude,longitude} =this.props
        var v=this.map.getView()
        v.setMaxZoom(maxZoom)
        v.setMinZoom(minZoom)
        v.setCenter(ol.proj.fromLonLat([longitude,latitude]))
        v.setZoom(zoom)
        console.log(v)
        return <div></div>
    }

    render(){
        const ol= {
            width: '100vw', height: '100vh', zIndex: '-1',
            position: 'absolute',left: '0px',top:'0px',
          }
    return (
    <div>
    <p>hello world</p>
    <div id="olmap" style={ol}>
            </div>
            {
                this.init()

            }
            {
                this.changeView()
            }
    </div>
    )
}
}