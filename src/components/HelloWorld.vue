<template>
  <div class="hello">
    <a-form-model ref="customForm" :layout="form.layout" :model="form" :rules="rules">
      <a-form-model-item
        style="padding-left: 119px; margin-right: 0; width: 100%"
        label="人员选择"
        prop="selectPersonName"
        ref="selectPersonName"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
      >
        <!-- <div > -->
        <!-- class="input-button"  -->
        <a-input
          v-show="false"
          style="width: 0"
          v-model="form.selectPersonName"
          
        />
        <a-button @click="selectFilePerson">选择</a-button>
        <!-- </div> -->
        <ul class="chooseBox">
          <li v-for="(item, i) in form.selectPerson" :key="i">
            {{ item.name }}
            <span @click="dele(i)">
              <a-icon type="delete" />
            </span>
          </li>
        </ul>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary"> Submit </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    let selectPersonChange = (rule, value, callback) => {
      console.log(rule, value, "出发了-----");
      if (this.form.selectPersonName == "") {
        callback(new Error("请选择人员"));
      } else {
        callback();
      }
    };
    return {
      form: {
        layout: "inline",
        fieldA: "",
        fieldB: "",
        selectPersonName: "",
        selectPerson: [],
      },
      rules: {
        selectPersonName: [
          // {
          //   required: true,
          //   message: "请选择人员hh",
          //   trigger: "blur",
          // },
          {
            required: true,
             message: "请选择人员",
             validate: selectPersonChange,
             trigger: "change",
          }
        ],
      },
    };
  },
  watch: {
  },
  methods: {
    selectFilePerson() {
      this.form.selectPersonName = "kk,www,hhh";
      this.form.selectPerson = [
        {
          name: "kk",
        },
        {
          name: "www",
        },
        {
          name: "hhh",
        },
      ];
      this.$refs.customForm.validateField("selectPersonName");
    },
    dele(index) {
      let arr = this.form.selectPersonName.split(",");
      arr.splice(index, 1);
      let name  = arr.join(",");
      this.$set(this.form, 'selectPersonName', name)
      this.$refs.customForm.validateField("selectPersonName");
      this.form.selectPerson.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
