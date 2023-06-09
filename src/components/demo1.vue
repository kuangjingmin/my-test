<template>
  <div class="hello">
    <a-form ref="customForm" :layout="source.layout" :form="form" :rules="rules">
      <a-form-item
        style="padding-left: 119px; margin-right: 0; width: 100%"
        label="人员选择"
        ref="selectPersonName"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
      >
        <!-- <div > -->
        <!-- class="input-button"  -->
          <!-- v-show="false" -->
        <a-input
          style="width: 300px;"
          v-decorator="[
            'selectPersonName',
            {
              rules: rules.selectPersonName,
            }
          ]"
          
        />
        <a-button @click="selectFilePerson">选择</a-button>
        <!-- </div> -->
        <ul class="chooseBox">
          <li v-for="(item, i) in source.selectPerson" :key="i">
            {{ item.name }}
            <span @click="dele(i)">
              <a-icon type="delete" />
            </span>
          </li>
        </ul>
      </a-form-item>
      <a-form-item>
        <a-button type="primary"> Submit </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "demo1",
  props: {},
  data() {
    return {
      source: {
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
             trigger: "change",
          }
        ],
      },
    };
  },
  watch: {
  },
  created () {
    this.form = this.$form.createForm(this, {name: 'custom_form'});
  },
  methods: {
    selectFilePerson() {
      this.source.selectPersonName = "kk,www,hhh";
      this.source.selectPerson = [
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
      this.form.setFieldsValue({
        selectPersonName : this.source.selectPersonName
      })
      this.form.validateFields((errors, values) => {
        console.log(errors, values,'111111');
      });
    },
    dele(index) {
      let arr = this.source.selectPersonName.split(",");
      arr.splice(index, 1);
      let name  = arr.join(",");
      this.$set(this.source, 'selectPersonName', name)
      this.form.setFieldsValue({
        selectPersonName : this.source.selectPersonName
      })
      this.form.validateFields((errors, values) => {
        console.log(errors, values,'22222');
      });
      this.source.selectPerson.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
