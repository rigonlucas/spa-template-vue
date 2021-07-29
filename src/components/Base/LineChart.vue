<script>
import { Line } from "vue-chartjs"
import ChartLineColors from "@/configs/ChartLinesClors"

export default {
  name: "LineChart",
  extends: Line,
  props:{
    labels_props: {
      type: Array,
      default: () => [],
    },
    datasets_props: {
      type: Array,
      default: () => [],
    },
    title_props:{
      type: String,
      default: "Meus dados",
    },
  },
  data(){
    return {
      labels: this.labels_props,
      datasets: this.datasets_props,
      title: this.title_props,

      colorsList: ChartLineColors,
      chartData: null,
      chartOptions: null,
    }
  },
  beforeMount() {
    if (this.datasets.length > this.colorsList.length){
      throw (`Array de objetos ChartLineColors[${this.colorsList.length}] é menor que a quantidade de itens no dataset[${this.datasets.length}]. Inclua mais um manualmente`)
    }
    this.datasets.forEach((item, index) => {
      this.datasets[index]["backgroundColor"] = this.colorsList[index].backgroundColor
      this.datasets[index]["borderColor"] = this.colorsList[index].borderColor
      this.datasets[index]["pointBackgroundColor"] = this.colorsList[index].pointBackgroundColor
      this.datasets[index]["pointHoverRadius"] = this.colorsList[index].pointHoverRadius
      this.datasets[index]["pointRadius"] = this.colorsList[index].pointRadius
      this.datasets[index]["tension"] = this.colorsList[index].tension
    })
    this.chartData = {
      labels: this.labels,
      datasets: this.datasets,
    }
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: this.title,
      },
    }
  },
  mounted: function (){
    this.renderChart(this.chartData, this.chartOptions)
  },

}
</script>
